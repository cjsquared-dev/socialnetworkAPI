import { format } from 'date-fns';

const dateFormat = (date: Date, formatString: string) => {
    return format(date, formatString);
}

export default dateFormat;