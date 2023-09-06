const mapping: Record<string, string> = {
  attendances: 'attendance',
  renamedclasses: 'Renamedclass',
  organizations: 'organization',
  students: 'student',
  teachers: 'teacher',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
