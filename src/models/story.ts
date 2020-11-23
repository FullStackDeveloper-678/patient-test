import * as yup from "yup";

const storyTest = yup.object().shape({
	phoneNumber: yup.string().required(),
	testNumber: yup.number().positive().required(),
	response: yup.string().required(),
	result: yup.number().positive().required(),
	date: yup.date().default(function () {
		return new Date();
	}),
});

export default storyTest;
