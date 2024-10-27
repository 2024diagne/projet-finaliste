<?php

namespace App\Http\Controllers;

use App\Models\Commande;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class CommandeController extends Controller implements HasMiddleware 
{

    public static function middleware() {
        return [
            new Middleware('auth:sanctum', except:['index','show'])
        ];
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Commande::with('user')->latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'destination'=>'required',
            'activité'=>'required',
            'hébergement'=>'required',

        ]);
        $commande =$request->user()->commandes()->create($fields);

        return ['commande'=>$commande,"user"=>$commande->user];
    }

    /**
     * Display the specified resource.
     */
    public function show(Commande $commande)
    {
        return ['commande'=>$commande,"user"=>$commande->user];
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Commande $commande)
    {
        Gate::authorize('modify',$commande);

        $fields = $request->validate([
            'destination'=>'required',
            'activité'=>'required',
            'hébergement'=>'required'
        ]);
        $commande->update($fields);
        return ['commande'=>$commande,"user"=>$commande->user];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Commande $commande)
    {
        Gate::authorize('modify',$commande);
        $commande->delete();
        return ['message'=>' supprimer ce commande '];
    }
}
