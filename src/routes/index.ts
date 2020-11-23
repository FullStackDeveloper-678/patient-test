import express, { Request, Response } from "express";
import pool from "../config/db";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
	res.send("pong!");
});

router.patch("/createSailorTable", async (req: Request, res: Response) => {
	try {
		await pool.query(
			`CREATE TABLE user (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(64), phoneNumber VARCHAR(64))`
		);
		await pool.query(
			`CREATE TABLE story_test (id INT PRIMARY KEY AUTO_INCREMENT,indexNumber INT, response VARCHAR(64), phoneNumber VARCHAR(64), testNumber INT, result VARCHAR(64), date DATE)`
		);
		await pool.query(
			`CREATE TABLE memory_test (id INT PRIMARY KEY AUTO_INCREMENT,indexNumber INT, orderNumber INT,attemptNumber INT, phoneNumber VARCHAR(64), testNumber INT, result VARCHAR(64))`
		);
		res.json({ message: "Table successfully created" });
	} catch (error) {
		console.error(error);
		if (error.code === "ER_TABLE_EXISTS_ERROR")
			return res.status(409).json({ message: "Table already exists" });
		return res.status(200).json(error);
	}
});

router.post("/add/result", async (req: Request, res: Response) => {
	try {
		const data: any = await pool.query(
			`SELECT MAX(testNumber) as num FROM story_test WHERE phoneNumber = ?`,
			[req.body.phoneNumber]
		);
		for (let i = 0; i < req.body.rows.length; i++) {
			await pool.query(
				`INSERT INTO story_test (indexNumber, response, phoneNumber,testNumber,result,date) values (?, ?, ?, ?, ?, ?)`,
				[
					req.body.rows[i].no,
					req.body.rows[i].response,
					req.body.phoneNumber,
					data[0].num + 1,
					req.body.rows[i].result,
					new Date(),
				]
			);
		}

		res.status(200).json({ message: "Sailor Successfully created" });
	} catch (error) {
		console.error(error);
		return res.status(404).json(error);
	}
});

router.post("/test_2/result", async (req: Request, res: Response) => {
	try {
		for (let i = 0; i < req.body.rows.length; i++) {
			if (req.body.testNumber == 1) {
				await pool.query(
					`INSERT INTO memory_test (indexNumber, result, phoneNumber,testNumber,orderNumber,attemptNumber) values (?, ?, ?, ?, ?, ?)`,
					[
						req.body.rows[i].no,
						req.body.rows[i].result_1,
						req.body.phoneNumber,
						req.body.testNumber,
						req.body.rows[i].order_1 ? req.body.rows[i].order_1 : 0,
						req.body.attemptNumber,
					]
				);
			} else if (req.body.testNumber == 1) {
				await pool.query(
					`INSERT INTO memory_test (indexNumber, result, phoneNumber,testNumber,orderNumber,attemptNumber) values (?, ?, ?, ?, ?, ?)`,
					[
						req.body.rows[i].no,
						req.body.rows[i].result_2,
						req.body.phoneNumber,
						req.body.testNumber,
						req.body.rows[i].order_2 ? req.body.rows[i].order_2 : 0,
						req.body.attemptNumber,
					]
				);
			} else {
				await pool.query(
					`INSERT INTO memory_test (indexNumber, result, phoneNumber,testNumber,orderNumber,attemptNumber) values (?, ?, ?, ?, ?, ?)`,
					[
						req.body.rows[i].no,
						req.body.rows[i].result_3,
						req.body.phoneNumber,
						req.body.testNumber,
						req.body.rows[i].order_3 ? req.body.rows[i].order_3 : 0,
						req.body.attemptNumber,
					]
				);
			}
		}
		res.status(200).json({ message: "Sailor Successfully created" });
	} catch (error) {
		console.error(error);
		return res.status(404).json(error);
	}
});
// router.get("/sailor", async (req: Request, res: Response) => {
// 	try {
// 		const data = await pool.query(`SELECT * FROM SAILOR`);
// 		res.json({ data, message: "Sailors Successfully fetched" });
// 	} catch (error) {
// 		console.error(error);
// 		return res.json(error);
// 	}
// });

// router.get("/sailor/:id", async (req: Request, res: Response) => {
// 	try {
// 		const { id } = req.params;

// 		const data: any = await pool.query(`SELECT * FROM SAILOR WHERE SID = ?`, [
// 			id,
// 		]);

// 		if (data.length === 0) res.status(404).json({ message: "No Sailor Found" });

// 		res.json({ data: data[0], message: "Sailor Successfully Fetched" });
// 	} catch (error) {
// 		console.error(error);
// 		return res.json(error);
// 	}
// });

// router.put("/sailor/:id", async (req: Request, res: Response) => {
// 	try {
// 		const { id } = req.params;
// 		const { SNAME, RATING, AGE } = req.body;
// 		const sailor = { SNAME, RATING, AGE };

// 		await sailorSchema.validate(sailor);

// 		const data: any = await pool.query(
// 			`UPDATE SAILOR SET SNAME = ?, RATING = ?, AGE = ? WHERE SID = ?`,
// 			[SNAME, RATING, AGE, id]
// 		);

// 		res.json({ data, message: "Sailor Successfully Updated" });
// 	} catch (error) {
// 		console.error(error);
// 		return res.json(error);
// 	}
// });

// router.delete("/sailor/:id", async (req: Request, res: Response) => {
// 	try {
// 		const { id } = req.params;
// 		const data: any = await pool.query(`DELETE FROM SAILOR WHERE SID = ?`, [
// 			id,
// 		]);
// 		res.json({ data, message: "Sailor Successfully Deleted" });
// 	} catch (error) {
// 		console.error(error);
// 		return res.json(error);
// 	}
// });

export default router;
