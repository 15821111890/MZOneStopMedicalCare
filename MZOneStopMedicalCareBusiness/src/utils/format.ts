export function formatDateTime(value: string | Date): string {
  if (!value) return '';
  const d = typeof value === 'string' ? new Date(value) : value;
  if (Number.isNaN(d.getTime())) return '';
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export function leadStatusLabel(status: number): string {
  switch (status) {
    case 0:
      return 'New';
    case 1:
      return 'Contacted';
    case 2:
      return 'Closed';
    default:
      return 'Unknown';
  }
}
