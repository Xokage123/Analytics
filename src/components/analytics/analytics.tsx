import Image from 'next/image';
import * as React from 'react';

import Card from 'components/card';

import { items } from './const';

import styles from './analytics.module.scss';

const Analytics: React.FC = () => {
  return (
    <section>
      <ul className={styles.list}>
        {items.map((item) => {
          const { title, amount, icon, summa, color } = item;

          const itemStyle = {
            '--color': color,
          } as React.CSSProperties;

          return (
            <li key={title} style={itemStyle}>
              <Card className={styles.item}>
                <div style={itemStyle} className={styles.itemIcon}>
                  <Image src={icon.src} {...icon.options} unoptimized />
                </div>

                <div>
                  <p className={styles.itemTitle}>{title}</p>

                  <div className={styles.itemDescription}>
                    <p className="bold">{amount}</p>

                    {summa ? (
                      <>
                        <div className={styles.demarcate} />

                        <span>{summa}</span>
                      </>
                    ) : null}
                  </div>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Analytics;
