<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    use HasFactory;
    protected $fillable = [
        'destination',
        'activité',
        'hébergement'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

}
