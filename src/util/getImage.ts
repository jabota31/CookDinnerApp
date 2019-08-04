import Picker from 'react-native-image-crop-picker';
import getText from './getText';

let text = getText('crop');

export async function choosePic(circle = false) {
	return await Picker.openPicker({
		cropping: true,
		cropperCancelText: text.cancel,
		cropperChooseText: text.choose,
		hideBottomControls: true,
		showCropGuidelines: false,
		mediaType: 'photo',
		loadingLabelText: text.processing,
		compressImageMaxHeight: 1000,
		compressImageMaxWidth: 1000,
		cropperCircleOverlay: circle,
		cropperToolbarTitle: text.crop,
		cropperToolbarColor: '#00ab9d',
		cropperStatusBarColor: '#00ab9d',
		cropperActiveWidgetColor: '#00ab9d'
	});
}

export async function takePic(circle = false) {
	return await Picker.openPicker({
		cropping: true,
		cropperCancelText: text.cancel,
		cropperChooseText: text.choose,
		hideBottomControls: true,
		showCropGuidelines: false,
		mediaType: 'photo',
		loadingLabelText: text.processing,
		compressImageMaxHeight: 1000,
		compressImageMaxWidth: 1000,
		useFrontCamera: true,
		cropperCircleOverlay: circle,
		cropperToolbarTitle: text.crop,
		cropperToolbarColor: '#00ab9d',
		cropperStatusBarColor: '#00ab9d',
		cropperActiveWidgetColor: '#00ab9d'
	});
}