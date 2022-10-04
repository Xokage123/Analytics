export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  handleChange: (newValue: string) => void;
  options: Option[];

  placeholder?: string;
}
