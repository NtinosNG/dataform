<?php

namespace App\Http\Controllers\Api;

use App\Form;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $Forms = Form::all('first_name', 'surname');
        $Forms = Form::all();


        return response()->json($Forms);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'first_name' => 'required',
            'surname' => 'required',
            'email' => 'required',
            'gender' => 'required',
            'mobile_number' => 'required',
            'birthday' => 'required'
          ]);
  
          $form = Form::create([
            'first_name' => $validatedData['first_name'],
            'surname' => $validatedData['surname'],
            'email' => $validatedData['email'],
            'gender' => $validatedData['gender'],
            'mobile_number' => $validatedData['mobile_number'],
            'birthday' => $validatedData['birthday']
          ]);
  
          return response()->json('Form information has been sumbitted!', $form);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
          $form = Form::findOrFail($id);

          return response()->json($form);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
