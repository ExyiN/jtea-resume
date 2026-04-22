export interface Experience {
  title: string;
  company: string;
  city: string;
  zipCode: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string[];
  tags: {
    value: string;
    severity: 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' | undefined | null;
  }[];
}
