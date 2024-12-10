#include <emscripten/emscripten.h>

// extern "C" 
// {
//     EMSCRIPTEN_KEEPALIVE int add(int a, int b)
//     {
//         return a + b;
//     }
//     EMSCRIPTEN_KEEPALIVE int sub(int a, int b)
//     {
//         return a - b;
//     }
// }



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
