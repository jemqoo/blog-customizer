import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { Select } from '../select';

import {
	OptionType,
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

interface IArticleParamsFormProps {
	articleState: typeof defaultArticleState;
	setArticleState: (newState: typeof defaultArticleState) => void;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	onReset: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const ArticleParamsForm = ({
	articleState,
	setArticleState,
	onSubmit,
	onReset,
}: IArticleParamsFormProps) => {
	const [isOpenSidebar, setIsOpenSidebar] = useState(false);

	const onToggle = () => {
		setIsOpenSidebar((isOpenSidebar) => !isOpenSidebar);
	};

	const handleFontFamilyChange = (selectedValue: OptionType) => {
		setArticleState({
			...articleState,
			fontFamilyOption: selectedValue,
		});
	};

	const handleFontSizeChange = (selectedValue: OptionType) => {
		setArticleState({
			...articleState,
			fontSizeOption: selectedValue,
		});
	};

	const handleFontColorChange = (selectedValue: OptionType) => {
		setArticleState({
			...articleState,
			fontColor: selectedValue,
		});
	};

	const handleBackgroundColorChange = (selectedValue: OptionType) => {
		setArticleState({
			...articleState,
			backgroundColor: selectedValue,
		});
	};

	const handleContentWidthChange = (selectedValue: OptionType) => {
		setArticleState({
			...articleState,
			contentWidth: selectedValue,
		});
	};

	return (
		<>
			<ArrowButton onClick={onToggle} isOpen={isOpenSidebar} />
			<aside
				className={isOpenSidebar ? styles.container_open : styles.container}>
				<form className={styles.form} onSubmit={onSubmit} onReset={onReset}>
					<Text weight={800} size={31} uppercase>
						Задайте параметры
					</Text>
					<Select
						selected={articleState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={handleFontFamilyChange}
						title='Шрифт'
					/>
					<RadioGroup
						name='Размер шрифта'
						options={fontSizeOptions}
						selected={articleState.fontSizeOption}
						onChange={handleFontSizeChange}
						title='Размер шрифта'
					/>
					<Select
						selected={articleState.fontColor}
						options={fontColors}
						onChange={handleFontColorChange}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						selected={articleState.backgroundColor}
						options={backgroundColors}
						onChange={handleBackgroundColorChange}
						title='Цвет фона'
					/>
					<Select
						selected={articleState.contentWidth}
						options={contentWidthArr}
						onChange={handleContentWidthChange}
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
