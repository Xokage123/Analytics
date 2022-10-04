import { DropdownIndicatorProps } from 'react-select';

import { Option } from 'ui-kit/select/type';

export interface DropdownIndicatorComponentProps
  extends DropdownIndicatorProps<Option> {
  isOpen: boolean;
}
