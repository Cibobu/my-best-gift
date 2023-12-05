/* eslint-disable no-unused-vars */
import React, { CSSProperties, ReactComponentElement, ReactNode } from "react";
import { LangId } from "../language";

export enum Severities {
	SUCCESS = "success",
	ERROR = "error",
	WARNING = "warning",
	INFO = "info",
}


export interface ModalProps {
	icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
	imgIcon?: string;
	title?: ReactNode;
	desc?: ReactNode;
	customContent?: ReactNode;
	isWithoutTriggerBtn?: boolean;
	isFullSize?: boolean;
	okLabel?: ReactNode;
	disableOkLabel?: boolean;
	onOk?: () => void;
	cancelLabel?: ReactNode;
	onCancel?: () => void;
	closable?: boolean;
	titleStyle?: CSSProperties;
	component?: ReactComponentElement<any>;
	isLong?: boolean
}

export interface IQuiz {
	name?: string | null,
	answers: string[]
}

export interface GlobalStateType {
	lang: LangId;
	isModal?: ModalProps;
	quiz: IQuiz;
	currentQuestionIndex: number;
	isFinishQuiz: boolean,
	currentSlug?: string,
	onPageStatus: 'quiz' | 'input_name' | 'result' | 'join_challange',
	currentSelectBackground?: string | null
}

// DEFAULT VALUE GLOBAL STATE
export const globalState: GlobalStateType = {
	lang: LangId.ID,
	quiz: {
		name: null,
		answers: []
	},
	currentQuestionIndex: 0,
	isFinishQuiz: false,
	onPageStatus: 'quiz',
}

export interface FormCustomOption { value: string | number; label: ReactNode }