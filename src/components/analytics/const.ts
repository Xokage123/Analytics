import CheckIcon from 'public/static/images/check.svg';
import LostIcon from 'public/static/images/lost.svg';
import StarIcon from 'public/static/images/star.svg';
import TasksIcon from 'public/static/images/tasks.svg';
import TasksCompletedIcon from 'public/static/images/tasksCompleted.svg';
import TasksExpiredIcon from 'public/static/images/tasksExpired.svg';
import TasksNoIcon from 'public/static/images/tasksNo.svg';
import UserIcon from 'public/static/images/user.svg';

import { priceFormatter } from 'utils/number';

import { AnalyticItem } from './type';

export const items: AnalyticItem[] = [
  {
    color: 'var(--pink-normal-color)',
    icon: {
      src: StarIcon,
      options: {
        width: 20,
        height: 20,
        alt: 'star-icon',
      },
    },
    title: 'Total Leads and Deals',
    amount: 1600,
    summa: priceFormatter(132_000_999),
  },
  {
    color: 'var(--green-normal-color)',
    icon: {
      src: CheckIcon,
      options: {
        width: 22,
        height: 15,
        alt: 'check-icon',
      },
    },
    title: 'Won',
    amount: 45,
    summa: priceFormatter(108_000),
  },
  {
    color: 'var(--red-normal-color)',
    icon: {
      src: LostIcon,
      options: {
        width: 16,
        height: 16,
        alt: 'lost-icon',
      },
    },
    title: 'Lost',
    amount: 15,
    summa: priceFormatter(24_000),
  },
  {
    color: 'var(--blue-light-color)',
    icon: {
      src: UserIcon,
      options: {
        width: 22,
        height: 22,
        alt: 'user-icon',
      },
    },
    title: 'New leads',
    amount: 115,
  },
  {
    color: 'var(--pink-normal-color)',
    icon: {
      src: TasksIcon,
      options: {
        width: 18,
        height: 24,
        alt: 'tasks-icon',
      },
    },
    title: 'Total tasks',
    amount: 269,
  },
  {
    color: 'var(--green-normal-color)',
    icon: {
      src: TasksCompletedIcon,
      options: {
        width: 18,
        height: 24,
        alt: 'tasks-completed-icon',
      },
    },
    title: 'Completed tasks',
    amount: 115,
  },
  {
    color: 'var(--red-normal-color)',
    icon: {
      src: TasksExpiredIcon,
      options: {
        width: 18,
        height: 24,
        alt: 'tasks-expired-icon',
      },
    },
    title: 'Expired tasks',
    amount: 45,
  },
  {
    color: 'var(--blue-light-color)',
    icon: {
      src: TasksNoIcon,
      options: {
        width: 18,
        height: 24,
        alt: 'tasks-no-icon',
      },
    },
    title: 'No tasks',
    amount: 10,
  },
];
