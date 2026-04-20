export function formatDateTime(value: string | Date): string {
  if (!value) return '';
  const d = typeof value === 'string' ? new Date(value) : value;
  if (Number.isNaN(d.getTime())) return '';
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export function leadStatusI18nKey(status: number): string {
  switch (status) {
    case 0:
      return 'status.new';
    case 1:
      return 'status.contacted';
    case 2:
      return 'status.closed';
    default:
      return 'status.unknown';
  }
}

export function interestI18nKey(value: string): string {
  return value ? `interests.${value}` : '';
}
