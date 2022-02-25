import * as yup from 'yup';

const pizzaSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'name must be at least 2 characters'),
    sauce: yup
        .string
        .oneOf(['white','marinara','pesto','bbq'],'Must select a sauce'),
    size: yup
        .number
        .oneOf([11,14,17],'Must select a size')
})

export default pizzaSchema;