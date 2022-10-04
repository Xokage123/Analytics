import { components, ControlProps } from 'react-select';

import { Option } from 'ui-kit/select/type';

const { Control } = components;

const CustomControl = (props: ControlProps<Option, boolean>) => {
  return <Control {...props} />;
};

export default CustomControl;
