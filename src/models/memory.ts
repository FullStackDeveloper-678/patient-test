import * as yup from "yup";

const memoryTest = yup.object().shape({
	indexNumber: yup.number().positive().required(),
	phoneNumber: yup.string().required(),
	testNumber: yup.number().positive().required(),
	orderNumber: yup.number().positive().required(),
	attemptNumber: yup.number().positive().required(),
	result: yup.number().positive().required(),
});

export default memoryTest;
