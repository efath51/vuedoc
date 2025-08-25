<?php

use App\Http\Controllers\Settings\PasswordController;
use App\Http\Controllers\Settings\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::prefix('docs')->group(function () {
    Route::get('introduction', fn() => Inertia::render('VuePages/V_Introduction'))->name('docs.introduction');

    Route::get('code-blocks', fn() => Inertia::render('VuePages/V_Structure'))->name('docs.code-blocks');


    Route::get('event-reactivity', fn() => Inertia::render('VuePages/V_Event&Reactivity'))->name('docs.event-reactivity');


    Route::get('event-modifier', fn() => Inertia::render('VuePages/V_EventModifier'))->name('docs.event-modifier');

    Route::get('lifecycle-hooks', fn() => Inertia::render('VuePages/V_LifecycleHooks'))->name('docs.lifecycle-hooks');

    Route::get('two-way-data-binding', fn() => Inertia::render('VuePages/V_TwoWayDataBinding'))->name('docs.two-way-data-binding');


    Route::get('data-uses', fn() => Inertia::render('VuePages/V_UsingData'))->name('docs.data');
    Route::get('component-model', fn() => Inertia::render('VuePages/V_ComponentModel'))->name('docs.component-model');


    Route::get('writing-tasks', fn() => Inertia::render('docs/WritingTasks'))->name('docs.writing-tasks');

    Route::prefix('notifications')->group(function () {
        Route::get('slack', fn() => Inertia::render('docs/notifications/Slack'))->name('docs.notifications.slack');
    });
});

Route::prefix('project')->group(function () {
    Route::get('invoice', fn() => Inertia::render('projectpages/P_invoice'))->name('project.invoice');

});

Route::prefix('tool')->group(function () {
    Route::get('wysiwyg', fn() => Inertia::render('toolPages/T_WYSIWYG'))->name('tool.wysiwyg');

});
