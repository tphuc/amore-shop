/**
 * KeyBinding Codes
 * The content of this file is based on the design of the open source project "microsoft/vscode",
 *   Copyright (c) Microsoft Corporation. All rights reserved.
 *
 * We inherit the KeyMod values from "microsoft/vscode",
 * but use the Browser's KeyboardEvent event implementation, and all values are used only as identification.
 */
export var KeyCode;

(function (KeyCode) {
  KeyCode[KeyCode["Unknown"] = 0] = "Unknown";
  KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
  KeyCode[KeyCode["Tab"] = 9] = "Tab";
  KeyCode[KeyCode["Enter"] = 13] = "Enter";
  KeyCode[KeyCode["Shift"] = 16] = "Shift";
  KeyCode[KeyCode["Ctrl"] = 17] = "Ctrl";
  KeyCode[KeyCode["Alt"] = 18] = "Alt";
  KeyCode[KeyCode["PauseBreak"] = 19] = "PauseBreak";
  KeyCode[KeyCode["CapsLock"] = 20] = "CapsLock";
  KeyCode[KeyCode["Escape"] = 27] = "Escape";
  KeyCode[KeyCode["Space"] = 32] = "Space";
  KeyCode[KeyCode["PageUp"] = 33] = "PageUp";
  KeyCode[KeyCode["PageDown"] = 34] = "PageDown";
  KeyCode[KeyCode["End"] = 35] = "End";
  KeyCode[KeyCode["Home"] = 36] = "Home";
  KeyCode[KeyCode["LeftArrow"] = 37] = "LeftArrow";
  KeyCode[KeyCode["UpArrow"] = 38] = "UpArrow";
  KeyCode[KeyCode["RightArrow"] = 39] = "RightArrow";
  KeyCode[KeyCode["DownArrow"] = 40] = "DownArrow";
  KeyCode[KeyCode["Insert"] = 45] = "Insert";
  KeyCode[KeyCode["Delete"] = 46] = "Delete";
  KeyCode[KeyCode["KEY_0"] = 48] = "KEY_0";
  KeyCode[KeyCode["KEY_1"] = 49] = "KEY_1";
  KeyCode[KeyCode["KEY_2"] = 50] = "KEY_2";
  KeyCode[KeyCode["KEY_3"] = 51] = "KEY_3";
  KeyCode[KeyCode["KEY_4"] = 52] = "KEY_4";
  KeyCode[KeyCode["KEY_5"] = 53] = "KEY_5";
  KeyCode[KeyCode["KEY_6"] = 54] = "KEY_6";
  KeyCode[KeyCode["KEY_7"] = 55] = "KEY_7";
  KeyCode[KeyCode["KEY_8"] = 56] = "KEY_8";
  KeyCode[KeyCode["KEY_9"] = 57] = "KEY_9";
  KeyCode[KeyCode["KEY_A"] = 65] = "KEY_A";
  KeyCode[KeyCode["KEY_B"] = 66] = "KEY_B";
  KeyCode[KeyCode["KEY_C"] = 67] = "KEY_C";
  KeyCode[KeyCode["KEY_D"] = 68] = "KEY_D";
  KeyCode[KeyCode["KEY_E"] = 69] = "KEY_E";
  KeyCode[KeyCode["KEY_F"] = 70] = "KEY_F";
  KeyCode[KeyCode["KEY_G"] = 71] = "KEY_G";
  KeyCode[KeyCode["KEY_H"] = 72] = "KEY_H";
  KeyCode[KeyCode["KEY_I"] = 73] = "KEY_I";
  KeyCode[KeyCode["KEY_J"] = 74] = "KEY_J";
  KeyCode[KeyCode["KEY_K"] = 75] = "KEY_K";
  KeyCode[KeyCode["KEY_L"] = 76] = "KEY_L";
  KeyCode[KeyCode["KEY_M"] = 77] = "KEY_M";
  KeyCode[KeyCode["KEY_N"] = 78] = "KEY_N";
  KeyCode[KeyCode["KEY_O"] = 79] = "KEY_O";
  KeyCode[KeyCode["KEY_P"] = 80] = "KEY_P";
  KeyCode[KeyCode["KEY_Q"] = 81] = "KEY_Q";
  KeyCode[KeyCode["KEY_R"] = 82] = "KEY_R";
  KeyCode[KeyCode["KEY_S"] = 83] = "KEY_S";
  KeyCode[KeyCode["KEY_T"] = 84] = "KEY_T";
  KeyCode[KeyCode["KEY_U"] = 85] = "KEY_U";
  KeyCode[KeyCode["KEY_V"] = 86] = "KEY_V";
  KeyCode[KeyCode["KEY_W"] = 87] = "KEY_W";
  KeyCode[KeyCode["KEY_X"] = 88] = "KEY_X";
  KeyCode[KeyCode["KEY_Y"] = 89] = "KEY_Y";
  KeyCode[KeyCode["KEY_Z"] = 90] = "KEY_Z";
  KeyCode[KeyCode["Meta"] = 91] = "Meta";
  KeyCode[KeyCode["F1"] = 112] = "F1";
  KeyCode[KeyCode["F2"] = 113] = "F2";
  KeyCode[KeyCode["F3"] = 114] = "F3";
  KeyCode[KeyCode["F4"] = 115] = "F4";
  KeyCode[KeyCode["F5"] = 116] = "F5";
  KeyCode[KeyCode["F6"] = 117] = "F6";
  KeyCode[KeyCode["F7"] = 118] = "F7";
  KeyCode[KeyCode["F8"] = 119] = "F8";
  KeyCode[KeyCode["F9"] = 120] = "F9";
  KeyCode[KeyCode["F10"] = 121] = "F10";
  KeyCode[KeyCode["F11"] = 122] = "F11";
  KeyCode[KeyCode["F12"] = 123] = "F12";
  KeyCode[KeyCode["NumLock"] = 144] = "NumLock";
  KeyCode[KeyCode["ScrollLock"] = 145] = "ScrollLock";
  KeyCode[KeyCode["Equal"] = 187] = "Equal";
  KeyCode[KeyCode["Minus"] = 189] = "Minus";
  KeyCode[KeyCode["Backquote"] = 192] = "Backquote";
  KeyCode[KeyCode["Backslash"] = 220] = "Backslash";
})(KeyCode || (KeyCode = {}));

export var KeyMod;

(function (KeyMod) {
  KeyMod[KeyMod["CtrlCmd"] = 2048] = "CtrlCmd";
  KeyMod[KeyMod["Shift"] = 1024] = "Shift";
  KeyMod[KeyMod["Alt"] = 512] = "Alt";
  KeyMod[KeyMod["WinCtrl"] = 256] = "WinCtrl";
})(KeyMod || (KeyMod = {}));