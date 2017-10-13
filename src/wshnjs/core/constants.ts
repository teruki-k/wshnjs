var WshRunning                  = 0;
var WshFinished                 = 1;

var WindowsFolder               = 0;
var SystemFolder                = 1;
var TemporaryFolder             = 2;

var ForReading                  = 1;
var ForWriting                  = 2;
var ForAppending                = 8;

var TristateUseDefault          = -2;
var TristateTrue                = -1;
var TristateFalse               = 0;

var adSaveCreateNotExists       = 1;
var adSaveCreateOverwrite       = 2;

var FOF_ALLOWUNDO               = 64;
var FOF_CONFIRMMOUSE            = 2;
var FOF_FILESONLY               = 128;
var FOF_MULTIDESTFILES          = 1;
var FOF_NOCONFIRMATION          = 16;
var FOF_NOCONFIRMMKDIR          = 512;
var FOF_NO_CONNECTED_ELEMENTS   = 8192;
var FOF_NOCOPYSECURITYATTRIBS   = 2048;
var FOF_NOERRORUI               = 1024;
var FOF_NORECURSEREPARSE        = 32768;
var FOF_NORECURSION             = 4096;
var FOF_NO_UI                   = (FOF_SILENT |FOF_NOCONFIRMATION | FOF_NOERRORUI | FOF_NOCONFIRMMKDIR);
var FOF_RENAMEONCOLLISION       = 8;
var FOF_SILENT                  = 4;
var FOF_SIMPLEPROGRESS          = 256;
var FOF_WANTMAPPINGHANDLE       = 32;
var FOF_WANTNUKEWARNING         = 16384;