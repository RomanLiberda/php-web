<?php

function autoload($className)
{
    if (preg_match('/Controller$/', $className)) {
        require_once('controllers/' . $className . '.php');
    } else {
        require_once('managers/' . $className . '.php');
    }
}

spl_autoload_register(autoload);