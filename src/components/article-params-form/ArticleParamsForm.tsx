import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { Select } from '../select';

import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';

import { RadioGroup } from '../radio-group';
import { Text } from 'components/text';
import { Separator } from '../separator/Separator';

export const ArticleParamsForm = () => {
	const [isOpenSidebar, setIsOpenSidebar] = useState(false);

	const onToggle = () => {
		setIsOpenSidebar((isOpenSidebar) => !isOpenSidebar);
	};

	return (
		<>
			<ArrowButton onClick={onToggle} isOpen={isOpenSidebar} />
			<aside
				className={isOpenSidebar ? styles.container_open : styles.container}>
				<form className={styles.form}>
					<Text weight={800} size={31} uppercase>
						Задайте параметры
					</Text>
					<Select
						selected={defaultArticleState.fontFamilyOption}
						options={fontFamilyOptions}
						// // onChange={}
						// // onClose={}
						title='Шрифт'
					/>
					<RadioGroup
						name='Размер шрифта'
						options={fontSizeOptions}
						selected={defaultArticleState.fontSizeOption}
						// onChange={}
						title='Размер шрифта'
					/>
					<Select
						selected={defaultArticleState.fontColor}
						options={fontColors}
						// // onChange={}
						// // onClose={}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						selected={defaultArticleState.backgroundColor}
						options={backgroundColors}
						// // onChange={}
						// // onClose={}
						title='Цвет фона'
					/>
					<Select
						selected={defaultArticleState.contentWidth}
						options={contentWidthArr}
						// // onChange={}
						// // onClose={}
						title='Ширина контента'
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
