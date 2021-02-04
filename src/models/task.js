module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        description: DataTypes.STRING,
        value: DataTypes.BOOLEAN
    }, {
        timestamps: false
    });
    return Task;
}
