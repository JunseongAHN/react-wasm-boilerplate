cmake_minimum_required(VERSION 3.8)

project(test)

add_definitions(-std=c++17)
set (CMAKE_CXX_STANDARD 17)

if (DEFINED EMSCRIPTEN)
	add_executable(calc src/calc.cxx)

	set(CMAKE_EXECUTABLE_SUFFIX ".wasm")
	# -s SIDE_MODULE=1
	# -s SIDE_MODULE=1 
	# set_target_properties(calc PROPERTIES COMPILE_FLAGS "-Os")
	# set_target_properties(calc PROPERTIES LINK_FLAGS    "-Os -s WASM=1 -s STANDALONE_WASM --no-entry -o sample.js")

	set_target_properties(calc PROPERTIES COMPILE_FLAGS "-Os -s SIDE_MODULE=1 ")
	set_target_properties(calc PROPERTIES LINK_FLAGS    "-Os -s WASM=1 -s SIDE_MODULE=1 -s STANDALONE_WASM --no-entry")


else()
	message("YOU GOT HERE!!!!")
	add_library(calc SHARED src/calc.cxx)
endif()