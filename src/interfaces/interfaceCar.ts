export interface Car {
  brand: string;
  enrollmentDate: string;
  fuel: string;
  model?: string;
  user: string;
}

export interface CompleteCarInfo {
  brand: string;
  model: string;
  period: string;
  cc: string;
  cylinders: string;
  fuel: string;
  kw: string;
  cvf: string;
  cv: string;
  value: string;
}
