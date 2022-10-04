import Image from 'next/image';
import { components } from 'react-select';

import cn from 'classnames';

import ArrowIcon from 'public/static/images/arrow.svg';

import { DropdownIndicatorComponentProps } from './type';

import styles from './dropdownIndicator.module.scss';

const { DropdownIndicator } = components;

const DropdownIndicatorComponent = (props: DropdownIndicatorComponentProps) => {
  const { isOpen, ...indicatorProps } = props;

  return (
    <DropdownIndicator
      {...indicatorProps}
      className={cn(props.className, styles.container)}>
      <div
        className={cn(styles.icon, {
          [styles.iconClose]: !isOpen,
          [styles.iconOpen]: isOpen,
        })}>
        <Image
          src={ArrowIcon}
          width={10}
          height={5}
          unoptimized
          alt="icon-select"
        />
      </div>
    </DropdownIndicator>
  );
};

export default DropdownIndicatorComponent;
