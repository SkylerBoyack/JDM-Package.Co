SELECT cart_id FROM cart
WHERE user_id = $1 AND active = TRUE;