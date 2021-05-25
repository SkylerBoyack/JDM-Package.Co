DELETE FROM package_cart_junction
WHERE cart_id = $1 AND package_id = $2;
SELECT * FROM package_cart_junction pc 
JOIN packages p ON pc.package_id = p.package_id
WHERE pc.cart_id = $1
ORDER BY pc.package_id;

