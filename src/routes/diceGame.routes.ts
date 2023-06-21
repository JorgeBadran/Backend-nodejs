import { Router } from "express";
import { playerRollDice, generalRanking, getBetterPlayer, getWorstPlayer, deleteGames } from "../controllers/diceGame.controllers";

const router = Router();

router.post('/player/:id', playerRollDice);
router.get('/ranking', generalRanking);
router.get('/better-player', getBetterPlayer);
router.get('/worst-player', getWorstPlayer);
router.delete('/delete/:id', deleteGames );


export default router;