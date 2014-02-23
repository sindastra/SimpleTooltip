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

$(document).mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$(".tt").hover(function() {
    // mouse in
    var tt = $("#tooltip");
    var tc = $(this).attr("data-tooltip");
    if (tc == null) {
        tc = "DEBUG: you forgot to add 'data-tooltip'!";
    }
    tt.text(tc);
    tt.css({"top":mouseY,"left":mouseX});
    var te = $(this).attr("data-tt-effect");
    if (te == "fade"){
        tt.fadeIn();
    }else{
        tt.addClass("show");
    }    
},function() {
    // mouse out
    var tt = $("#tooltip");
    var te = $(this).attr("data-tt-effect");
    if (te == "fade"){
        tt.fadeOut(100);
    }else{
        tt.removeClass("show");
        tt.text("");
    }    
});
