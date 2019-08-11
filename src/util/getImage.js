import Picker from 'react-native-image-crop-picker';
import getText from './getText';

const text = getText('crop');

export async function choosePic(circle = false) {
	return Picker.openPicker({
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
		cropperToolbarColor: '#00ad9f',
		cropperStatusBarColor: '#00ad9f',
		cropperActiveWidgetColor: '#00ad9f',
	});
}

export async function takePic(circle = false) {
	return Picker.openPicker({
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
		cropperToolbarColor: '#00ad9f',
		cropperStatusBarColor: '#00ad9f',
		cropperActiveWidgetColor: '#00ad9f',
	});
}
