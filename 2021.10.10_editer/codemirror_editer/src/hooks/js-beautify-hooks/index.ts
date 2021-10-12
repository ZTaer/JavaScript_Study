import useJsBeautifyHooks from './use-js-beautify.hooks';
import useCssBeautifyHooks from './use-css-beautify.hooks';
import useHtmlBeautifyHooks from './use-html-beautify.hooks';
import { DefaultProps } from './index.model';

export const useJsBeautify = useJsBeautifyHooks;
export const useCssBeautify = useCssBeautifyHooks;
export const useHtmlBeautify = useHtmlBeautifyHooks;

export default {
	useJsBeautify: useJsBeautifyHooks,
	useCssBeautify: useJsBeautifyHooks,
	useHtmlBeautify: useJsBeautifyHooks,
} as DefaultProps;
