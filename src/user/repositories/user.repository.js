const { default: mongoose } = require("mongoose");
const UserModel = require("../models/user.model");

const UserRepo = {
    save: async(field) => {
        try {
            let saveData = await UserModel.create(field);
            if (!saveData) {
                return null;
            }
            return saveData;
        } catch (error) {
            throw error;
        }
    },

    findByField: async(field) => {
        try {
            let data = await UserModel.findOne(field).lean().exec();
            if(!data) {
                return null;
            }
            return data;
        } catch (error) {
            throw error;
        }
    },

    findById: async(id) => {
        try {
            let data = await UserModel.findById(id).lean().exec();
            if(!data) {
                return null;
            }
            return data;
        } catch (error) {
            throw error;
        }
    },

    updateById: async(fields, id) => {
        try {
            let data = await UserModel.findByIdAndUpdate(id, fields).lean().exec();
            if(!data) {
                return null;
            }
            return data;
        } catch (error) {
            throw error;
        }
    },

    deleteById: async(id) => {
        try {
            let data = await UserModel.findByIdAndRemove(id);
            if(!data) {
                return null;
            }
            return data;
        } catch (error) {
            throw error;
        }
    },

    findAllByField: async(field) => {
        try {
            let data = await UserModel.find(field).lean().exec();
            if(!data) {
                return null;
            }
            return data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserRepo;