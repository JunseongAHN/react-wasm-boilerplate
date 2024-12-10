#include <emscripten/bind.h>

using namespace emscripten;



// no binding
extern "C" 
{
    int add_noBinding(int a, int b)
    {
        return a + b;
    }
    int sub_noBinding(int a, int b)
    {
        return a - b;
    }
}

// binding 
int add_binding(int a, int b)
{
    return a + b;
}
int sub_binding(int a, int b)
{
    return a - b;
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("add_binding", &add_binding);
    function("sub_binding", &sub_binding);
}