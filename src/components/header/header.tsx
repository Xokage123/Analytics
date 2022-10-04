import * as React from 'react';

import pipeline from 'store/pipeline';
import timescale from 'store/timescale';

import Select from 'ui-kit/select';

import { pipelinesOptions, timescales } from './const';

import styles from './header.module.scss';

const Header: React.FC = () => {
  const handleSetTimescale = (newValue: string) => () => {
    timescale.timescale = newValue;
  };

  const handleSetPipeline = (newValue: string) => {
    pipeline.pipeline = newValue;
  };

  return (
    <header className={styles.header}>
      <Select
        options={pipelinesOptions}
        placeholder="All Pipelines"
        handleChange={handleSetPipeline}
      />

      <ul className={styles.timescaleList}>
        {timescales.map((timescale) => {
          const { label, value } = timescale;

          return (
            <li key={value} className={styles.timescaleItem}>
              <button
                className={styles.timescaleButton}
                onClick={handleSetTimescale(value)}>
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
