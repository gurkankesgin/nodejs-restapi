const { userRepository } = require('../repository/repository.index');

/**
 * @description Gets the all users
 *
 * @returns {Promise<{success: boolean, error: *} | {success: boolean, data: [*]}>}
 * {success: false, error: any} or {success: true, data: [users]}
 */
exports.getAllUsers = async () => {
	try {
		const users = await userRepository.getAllUsers();

		return { success: true, data: users };
	} catch (error) {
		throw { success: false, error: any };
	}
};

/**
/**
 * @description Create User
 * @param user {object} Object containing all required fields to
 * create user
 *
 * @returns {Promise<{success: boolean, error: *} | {success: boolean}>}
 * {success: false, error: any} or {success: true}
 */
exports.createUser = async () => {
	try {
		await userRepository.createUser();

		return { success: true };
	} catch (error) {
		throw { success: false, error: any };
	}
};
