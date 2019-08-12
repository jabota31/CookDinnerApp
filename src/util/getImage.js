import Picker from 'react-native-image-crop-picker';

import i18n from '../i18n';

export async function choosePic(circle = false) {
	return Picker.openPicker(
		{
			cropping: true,
			cropperCancelText: i18n.t(
				'cancel',
			),
			cropperChooseText: i18n.t(
				'choose',
			),
			hideBottomControls: true,
			showCropGuidelines: false,
			mediaType:
				'photo',
			loadingLabelText: i18n.t(
				'processing',
			),
			compressImageMaxHeight: 1000,
			compressImageMaxWidth: 1000,
			cropperCircleOverlay: circle,
			cropperToolbarTitle: i18n.t(
				'crop',
			),
			cropperToolbarColor:
				'#00ad9f',
			cropperStatusBarColor:
				'#00ad9f',
			cropperActiveWidgetColor:
				'#00ad9f',
		},
	);
}

export async function takePic(circle = false) {
	return Picker.openPicker(
		{
			cropping: true,
			cropperCancelText: i18n.t(
				'cancel',
			),
			cropperChooseText: i18n.t(
				'choose',
			),
			hideBottomControls: true,
			showCropGuidelines: false,
			mediaType:
				'photo',
			loadingLabelText: i18n.t(
				'processing',
			),
			compressImageMaxHeight: 1000,
			compressImageMaxWidth: 1000,
			useFrontCamera: true,
			cropperCircleOverlay: circle,
			cropperToolbarTitle: i18n.t(
				'crop',
			),
			cropperToolbarColor:
				'#00ad9f',
			cropperStatusBarColor:
				'#00ad9f',
			cropperActiveWidgetColor:
				'#00ad9f',
		},
	);
}
