export const useValidate = (data, fields) => {
    const errors = fields.filter( field => {
        if (!data[field] || (data[field].length <= 0)) {
            return field;
        }
    })
    return errors
}