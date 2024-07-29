import { CSSProperties, useState } from 'react';

import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';
import { defaultArticleState } from 'src/constants/articleProps';

import 'src/styles/index.scss';
import styles from 'src/styles/index.module.scss';

export const App = () => {
	// Состояние приложения (для CSS-переменных)
	const [appState, setAppState] = useState(defaultArticleState);

	// Состояние формы
	const [formState, setFormState] = useState(defaultArticleState);

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setAppState(formState);
	};

	const handleFormReset = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormState(defaultArticleState);
		setAppState(defaultArticleState);
	};

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': appState.fontFamilyOption.value,
					'--font-size': appState.fontSizeOption.value,
					'--font-color': appState.fontColor.value,
					'--container-width': appState.contentWidth.value,
					'--bg-color': appState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				articleState={formState}
				setArticleState={setFormState}
				onSubmit={handleFormSubmit}
				onReset={handleFormReset}
			/>
			<Article />
		</main>
	);
};
