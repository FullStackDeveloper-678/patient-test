import * as yup from "yup";

const user = yup.object().shape({
	name: yup.string().required(),
	phoneNumber: yup.number().positive().required(),
});

export default user;
