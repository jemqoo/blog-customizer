import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import { FC } from 'react';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

interface IArrowButtonProps {
	onClick?: OnClick;
	isOpen?: boolean;
}

export const ArrowButton: FC<IArrowButtonProps> = ({ onClick, isOpen }) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, {
				[styles.container_open]: isOpen,
			})}
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: isOpen })}
			/>
		</div>
	);
};
