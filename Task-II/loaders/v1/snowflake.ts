const { Snowflake } = require('nodejs-snowflake');

class SnowFlake {
    static instance: any;
    static Loader() {
        const uid = new Snowflake();

        this.instance = uid;
        return uid;
    }
}
export default SnowFlake;
