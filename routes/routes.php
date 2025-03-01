<?php
// routes.php

function userRoutes() {
    if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_SERVER['REQUEST_URI'] === '/api/users') {
        // Fetch user data (e.g., from a database)
        echo json_encode(["name" => "John Doe", "email" => "john@example.com"]);
    }
}
