/*!
 *   SimpleTooltip
 *   Copyright (C) 2014 Sindastra. All rights reserved.
 *   https://github.com/sindastra/SimpleTooltip
 *
 * The above copyright notice and this notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
*/

var mouseX = 0;
var mouseY = 0;

var tt  = $("#tooltip");
var ttc = $(".tt");

$(document).mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

ttc.hover(function() {
    // mouse in    
    var tc = $(this).attr("data-tooltip");
    if (tc == null) {
        tc = "DEBUG: you forgot to add 'data-tooltip'!";
    }
    tt.text(tc);
    var te = $(this).attr("data-tt-effect");
    if (te == "fade"){
        tt.fadeIn();
    }else{
        tt.show();
    }    
},function() {
    // mouse out
    var te = $(this).attr("data-tt-effect");
    if (te == "fade"){
        tt.fadeOut(100);
    }else{
        tt.hide();
        tt.text("");
    }    
});

ttc.mousemove(function() {
    tt.css({"top":mouseY+5,"left":mouseX+5});
});