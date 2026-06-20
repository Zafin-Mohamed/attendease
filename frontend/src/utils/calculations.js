// Calculate attendance percentage for one subject
export function getAttendancePercent(subjectId, attendanceRecords) {
  const records = attendanceRecords.filter(
    (r) => r.subjectId === subjectId && r.status !== 'cancelled'
  )

  const total = records.length
  const present = records.filter((r) => r.status === 'present').length

  if (total === 0) return null

  return Math.round((present / total) * 100)
}

// Get color zone based on percentage
export function getZone(percent) {
  if (percent === null) return 'none'
  if (percent >= 80) return 'green'
  if (percent >= 75) return 'yellow'
  return 'red'
}

// How many classes can still be missed safely
export function getSafeToMiss(subjectId, attendanceRecords) {
  const records = attendanceRecords.filter(
    (r) => r.subjectId === subjectId && r.status !== 'cancelled'
  )

  const total = records.length
  const present = records.filter((r) => r.status === 'present').length

  if (total === 0) return 0

  let canMiss = 0
  while (true) {
    const newPercent = (present / (total + canMiss + 1)) * 100
    if (newPercent < 75) break
    canMiss++
    if (canMiss > 100) break
  }

  return canMiss
}

// How many classes must be attended to recover to 75%
export function getClassesToRecover(subjectId, attendanceRecords) {
  const records = attendanceRecords.filter(
    (r) => r.subjectId === subjectId && r.status !== 'cancelled'
  )

  const total = records.length
  const present = records.filter((r) => r.status === 'present').length

  if (total === 0) return 0

  const percent = (present / total) * 100
  if (percent >= 75) return 0

  let toAttend = 0
  while (true) {
    const newPercent = ((present + toAttend) / (total + toAttend)) * 100
    if (newPercent >= 75) break
    toAttend++
    if (toAttend > 100) break
  }

  return toAttend
}