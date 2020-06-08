@echo off
cd ../
set CUR=%cd%
%CUR%/tool/ConfigExporter/ConfigExporter.exe --template FunnyBall --exportJson 1 --exportStruct 1 --verbose 1
pause