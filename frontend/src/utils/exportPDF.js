import jsPDF from 'jspdf'

export function exportAttendancePDF(subjects, attendanceRecords) {
  const doc = new jsPDF()

  const today = new Date()
  const dateStr = today.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  // Title
  doc.setFontSize(20)
  doc.setTextColor(139, 92, 246)
  doc.text('AttendEase', 105, 20, { align: 'center' })

  // Subtitle
  doc.setFontSize(12)
  doc.setTextColor(100, 100, 100)
  doc.text('Attendance Report', 105, 30, { align: 'center' })
  doc.text(`Generated on: ${dateStr}`, 105, 38, { align: 'center' })

  // Divider line
  doc.setDrawColor(139, 92, 246)
  doc.line(14, 44, 196, 44)

  let y = 54

  if (subjects.length === 0) {
    doc.setFontSize(12)
    doc.setTextColor(150, 150, 150)
    doc.text('No subjects found.', 14, y)
  } else {
    subjects.forEach((subject) => {
      const records = attendanceRecords.filter(
        (r) => r.subjectId === subject.id && r.status !== 'cancelled'
      )
      const total = records.length
      const present = records.filter((r) => r.status === 'present').length
      const percent = total === 0 ? null : Math.round((present / total) * 100)

      // Subject name
      doc.setFontSize(14)
      doc.setTextColor(30, 30, 30)
      doc.text(subject.name.toUpperCase(), 14, y)

      // Percentage
      if (percent === null) {
        doc.setTextColor(150, 150, 150)
        doc.text('No data', 160, y)
      } else if (percent >= 80) {
        doc.setTextColor(34, 197, 94)
        doc.text(`${percent}%`, 160, y)
      } else if (percent >= 75) {
        doc.setTextColor(234, 179, 8)
        doc.text(`${percent}%`, 160, y)
      } else {
        doc.setTextColor(239, 68, 68)
        doc.text(`${percent}%`, 160, y)
      }

      y += 8

      // Stats line
      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      doc.text(`Present: ${present}   Total: ${total}   Scheduled: ${subject.days.join(', ') || 'None'}`, 14, y)

      y += 6

      // History records
      const subjectRecords = attendanceRecords
        .filter((r) => r.subjectId === subject.id)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5)

      subjectRecords.forEach((record) => {
        doc.setFontSize(9)
        if (record.status === 'present') doc.setTextColor(34, 197, 94)
        else if (record.status === 'absent') doc.setTextColor(239, 68, 68)
        else doc.setTextColor(150, 150, 150)

        doc.text(`  ${record.date}  —  ${record.status}`, 14, y)
        y += 5
      })

      y += 6

      // Divider between subjects
      doc.setDrawColor(200, 200, 200)
      doc.line(14, y, 196, y)
      y += 8

      // New page if needed
      if (y > 270) {
        doc.addPage()
        y = 20
      }
    })
  }

  doc.save('AttendEase-Report.pdf')
}