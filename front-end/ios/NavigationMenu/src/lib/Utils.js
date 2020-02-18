import moment from 'moment';

class Utils {
    formatRelativeTime(timestamp) {
        return moment.unix(timestamp).fromNow();
    }

    formatTime(timestamp, pattern = 'HH:mm:ss') {
        return moment.unix(timestamp).format(pattern);
    }

    formatDate(timestamp, pattern = 'DD/MM/YYYY') {
        return moment.unix(timestamp).format(pattern);
    }

    formatDateTime(timestamp) {
        return moment.unix(timestamp).format('DD/MM/YYYY HH:mm:ss');
    }

    formatNumberToVND(number = '') {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '₫';
    }

    formatWithCommas(number = '') {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    getCountText(amount, oneText, moreText) {
        return amount + ' ' + (amount === 1 ? oneText : moreText);
    }

    convertStandardVietnameseToNonAccent(text) {
        text = text.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        text = text.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        text = text.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        text = text.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        text = text.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        text = text.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        text = text.replace(/đ/g, 'd');

        text = text.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
        text = text.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
        text = text.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
        text = text.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
        text = text.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
        text = text.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
        text = text.replace(/Đ/g, 'D');

        text = text.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
        text = text.replace(/\u02C6|\u0306|\u031B/g, '');

        return text;
    }
}

export default new Utils();
