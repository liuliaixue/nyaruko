module.exports.checkSchema = function (data, schema) {
    let typeMap = {
        // String: '[object String]',
        // Number: '[object Number]',
        Date: '[object date]',
        // Boolean: '[object Boolean]',
        Object: '[object Object]',
        Array: '[object Array]',
    };
    if (Object.prototype.toString.call(schema) === '[object Object]') {
        for (let key in data) {
            if (!schema[key]) throw new Error(`unexpected data key: ${key}`);

            let schema[key] = typeof schema[key] === 'string' ? { type: schema[key] } : schema[key];
            let type = typeMap[key]
            switch (typeof data[key]) {
                if (schema[key].isRequired) throw new Error(`${key} is required`);
                case 'undefined':
            // if (schema[key].isRequired) throw new Error(`${key} is required`);
            break;
                case 'number':
            if ('number' !== type) throw new Error(`${key} type must be ${type}`);
            break;
                case 'string':
            if ('string' !== type) throw new Error(`${key} type must be ${type}`);
                case 'boolean':
            if ('boolean' !== type) throw new Error(`${key} type must be ${type}`);
            break;
                case 'object':
            if (Object.prototype.toString.call(data[key]) !== type) throw new Error(`${key} type must be ${type}`);
            break;
                default:
            throw new Error(`schema error`);
        }
    }
}
}